package edu.famu.thecoldestmarket.Services;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.*;
import com.google.firebase.cloud.FirestoreClient;
import com.google.firebase.internal.NonNull;
import edu.famu.thecoldestmarket.Model.Message;
import edu.famu.thecoldestmarket.Model.User;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ExecutionException;

@Service
public class MessageService {
    private  Firestore firestore;

    private static Message documentSnapshotToMessages(DocumentSnapshot document) {
        Message message = null;
        if (document.exists()) {
            message= new Message(document.getId(), document.getString("message"), document.getTimestamp("timestamp"));
        }
        return message;
    }
    public ArrayList<Message> getAllMessages() throws ExecutionException, InterruptedException {
        CollectionReference MessageCollection = firestore.collection("Message");
        ApiFuture<QuerySnapshot> future = MessageCollection.get();

        ArrayList<Message> messageList = new ArrayList<>();

        for (DocumentSnapshot document : future.get().getDocuments()) {
            Message message  = documentSnapshotToMessages(document);
            if (message != null)
                messageList.add(message);
        }
        return messageList;
    }

    public Message getMessageById(String messageID) throws ExecutionException, InterruptedException {
        CollectionReference messageCollection = firestore.collection("Message");
        ApiFuture<DocumentSnapshot> future = messageCollection.document(messageID).get();
        DocumentSnapshot document = future.get();

        return documentSnapshotToMessages(document);
    }
    public String createMessage(Message message) throws ExecutionException, InterruptedException {
        String messagetext = null;

        ApiFuture<DocumentReference> future = firestore.collection("Message").add(message);
        DocumentReference postRef = future.get();
        messagetext = postRef.getId();

        return messagetext;

    }

    public void updateMessage(String id, Map<String, String> updateValues){

        String [] allowed = {"message", "timestamp"};
        List<String> list = Arrays.asList(allowed);
        Map<String, Object> formattedValues = new HashMap<>();

        for(Map.Entry<String, String> entry : updateValues.entrySet()) {
            String key = entry.getKey();
            if(list.contains(key))
                formattedValues.put(key, entry.getValue());
        }

        DocumentReference userDoc = firestore.collection("Message").document(id);
        userDoc.update(formattedValues);
    }

    public void deleteMessage(String id)
    {
        CollectionReference userCollection = firestore.collection("Message");
        DocumentReference messageDoc = userCollection.document(id);

        if (messageDoc != null) {
            messageDoc.delete();
        }
    }



}


