package edu.famu.thecoldestmarket.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.CollectionReference;
import com.google.cloud.firestore.DocumentSnapshot;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.thecoldestmarket.Model.Business;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.concurrent.ExecutionException;

@Service
public class BusinessService {
    private final Firestore firestore;

    public BusinessService() {
        this.firestore = FirestoreClient.getFirestore();
    }

    private Business documentSnapshotToBusinesses(DocumentSnapshot document)
    {
        Business business = null;
        if(document.exists()){
            ArrayList<String> images = (ArrayList<String>) document.get("images");;
            business = new Business(document.getId(),document.getString("address"),document.getString("businessType"),images,document.getString("name"),document.getString("website"));
        }
        return business;
    }

    public ArrayList<Business> getAllBusinesses() throws ExecutionException, InterruptedException
    {
        CollectionReference businessCollection = firestore.collection("Business");
        ApiFuture<QuerySnapshot> future = businessCollection.get();

        ArrayList<Business> businessList = new ArrayList<>();

        for(DocumentSnapshot document : future.get().getDocuments()){
            Business business = documentSnapshotToBusinesses(document);
            if(business != null)
                businessList.add(business);
        }
        return businessList;
    }

    public Business getBusinessById(String businessID) throws ExecutionException, InterruptedException {
        CollectionReference businessCollection = firestore.collection("Business");
        ApiFuture<DocumentSnapshot> future = businessCollection.document(businessID).get();
        DocumentSnapshot document = future.get();

        return documentSnapshotToBusinesses(document);
    }
}
