package edu.famu.thecoldestmarket.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.thecoldestmarket.Model.User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@Service
public class UserService {
    private Firestore firestore;

    public UserService() {
        this.firestore = FirestoreClient.getFirestore();
    }

    private User documentSnapshotToUsers(DocumentSnapshot document)
    {
        User user = null;
        if(document.exists()){
            ArrayList<String> amenities = null;
            user = new User(document.getId(),document.getString("first_name"),document.getString("last_name"),document.getString("password"),document.getString("phone"),document.getString("username"));
        }
        return user;
    }

    public ArrayList<User> getAllUsers() throws ExecutionException, InterruptedException
    {
        CollectionReference userCollection = firestore.collection("Users");
        ApiFuture<QuerySnapshot> future = userCollection.get();

        ArrayList<User> userList = new ArrayList<>();

        for(DocumentSnapshot document : future.get().getDocuments()){
            User user = documentSnapshotToUsers(document);
            if(user != null)
                userList.add(user);
        }
        return userList;
    }

    public User getUserById(String userID) throws ExecutionException, InterruptedException {
        CollectionReference userCollection = firestore.collection("Users");
        ApiFuture<DocumentSnapshot> future = userCollection.document(userID).get();
        DocumentSnapshot document = future.get();

        return documentSnapshotToUsers(document);
    }
}
