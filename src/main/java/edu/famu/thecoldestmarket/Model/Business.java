package edu.famu.thecoldestmarket.Model;

import com.google.cloud.firestore.annotation.DocumentId;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Business {

    @DocumentId
    private String businessID;
    private String address;
    private String businessType;
    private String images;
    private String name;
    private String website;


}
