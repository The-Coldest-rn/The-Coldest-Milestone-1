package edu.famu.thecoldestmarket.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Business {


    private String businessID;
    private String address;
    private String businessType;
    private String images;
    private String name;
    private String website;


}
