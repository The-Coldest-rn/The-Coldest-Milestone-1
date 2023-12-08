package edu.famu.thecoldestmarket.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.thecoldestmarket.Model.Business;
import edu.famu.thecoldestmarket.Model.User;
import edu.famu.thecoldestmarket.util.ApiResponse;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class UserService {
    private final Firestore firestore;

    public UserService() {
        this.firestore = FirestoreClient.getFirestore();
    }

    private static User documentSnapshotToUsers(DocumentSnapshot document) {
        User user = null;
        if (document.exists()) {
            user = new User(document.getId(), document.getString("username"), document.getString("email"), document.getString("last_name"), document.getString("password"), document.getString("phone"));
        }
        return user;
    }

    public ArrayList<User> getAllUsers() throws ExecutionException, InterruptedException {
        CollectionReference userCollection = firestore.collection("User");
        ApiFuture<QuerySnapshot> future = userCollection.get();

        ArrayList<User> userList = new ArrayList<>();

        for (DocumentSnapshot document : future.get().getDocuments()) {
            User user = documentSnapshotToUsers(document);
            if (user != null)
                userList.add(user);
        }
        return userList;
    }

    public User getUserById(String userID) throws ExecutionException, InterruptedException {
        CollectionReference userCollection = firestore.collection("User");
        ApiFuture<DocumentSnapshot> future = userCollection.document(userID).get();
        DocumentSnapshot document = future.get();

        return documentSnapshotToUsers(document);
    }

    public String createUser(User user) throws ExecutionException, InterruptedException {
        String username = null;

        ApiFuture<DocumentReference> future = firestore.collection("User").add(user);
        DocumentReference postRef = future.get();
        username = postRef.getId();

        return username;

    }

    public void updateUser(String id, Map<String, String> updateValues){

        String [] allowed = {"first_name", "last_Name", "email", "phone"};
        List<String> list = Arrays.asList(allowed);
        Map<String, Object> formattedValues = new HashMap<>();

        for(Map.Entry<String, String> entry : updateValues.entrySet()) {
            String key = entry.getKey();
            if(list.contains(key))
                formattedValues.put(key, entry.getValue());
        }

        DocumentReference userDoc = firestore.collection("User").document(id);
        userDoc.update(formattedValues);
    }

    public void deleteUser(String id)
    {
        CollectionReference userCollection = firestore.collection("User");
        DocumentReference userDoc = userCollection.document(id);

        if (userDoc != null) {
            userDoc.delete();
        }
    }

    public ApiResponse loginUser(String username, String password) {
        try {
            CollectionReference userCollection = firestore.collection("User");
            Query query = userCollection.whereEqualTo("username", username).whereEqualTo("password", password);
            ApiFuture<QuerySnapshot> future = query.get();
            List<QueryDocumentSnapshot> documents = future.get().getDocuments();

            if (!documents.isEmpty()) {
                // User found, login successful
                return new ApiResponse(true, "Login successful", null, "Success");
            } else {
                // User not found or password incorrect
                return new ApiResponse(false, "Invalid username or password", null, "Not found or password incorrect");
            }
        } catch (ExecutionException | InterruptedException e) {
            return new ApiResponse(false, "An error occurred", null, e.getMessage());
        }
    }



}
