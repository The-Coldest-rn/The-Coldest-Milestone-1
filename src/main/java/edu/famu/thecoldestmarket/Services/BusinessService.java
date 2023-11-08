package edu.famu.thecoldestmarket.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import edu.famu.thecoldestmarket.Model.Business;
import org.springframework.stereotype.Service;

import java.util.*;
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

    public String createBusiness(Business business) throws ExecutionException, InterruptedException {
        String businessID = null;

        ApiFuture<DocumentReference> future = firestore.collection("Business").add(business);
        DocumentReference postRef = future.get();
        businessID = postRef.getId();

        return businessID;
    }

    public void updateBusiness(String id, Map<String, String> updateValues){

        String [] allowed = {"name", "address", "website"};
        List<String> list = Arrays.asList(allowed);
        Map<String, Object> formattedValues = new HashMap<>();

        for(Map.Entry<String, String> entry : updateValues.entrySet()) {
            String key = entry.getKey();
            if(list.contains(key))
                formattedValues.put(key, entry.getValue());
        }

        DocumentReference businessDoc = firestore.collection("Business").document(id);
        businessDoc.update(formattedValues);
    }

    public void deleteBusiness(String id)
    {
        CollectionReference businessCollection = firestore.collection("Business");
        DocumentReference businessDoc = businessCollection.document(id);

        if (businessDoc != null) {
            businessDoc.delete();
        }
    }
}
