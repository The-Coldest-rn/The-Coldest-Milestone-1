package edu.famu.thecoldestmarket.Model;

import com.google.cloud.firestore.annotation.DocumentId;
import com.google.firebase.database.annotations.Nullable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Business {

@DocumentId
    private @Nullable String businessID;
    private String address;
    private String businessType;
    private ArrayList images;
    private String name;
    private String website;


}
