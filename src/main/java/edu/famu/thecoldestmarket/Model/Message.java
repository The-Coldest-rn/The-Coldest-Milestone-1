package edu.famu.thecoldestmarket.Model;

import com.google.cloud.Date;
import com.google.cloud.Timestamp;
import com.google.cloud.firestore.annotation.DocumentId;
import com.google.firebase.database.annotations.Nullable;
import com.google.protobuf.util.Timestamps;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.text.ParseException;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Message {

 @DocumentId
    private @Nullable String messageID;
    private String message;
    private Timestamp timestamp;




    public void setTimestamp( String timestamp) throws ParseException
    {
        this.timestamp = Timestamp.fromProto(Timestamps.parse(timestamp));
    }
}

