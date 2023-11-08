package edu.famu.thecoldestmarket.Controller;
import edu.famu.thecoldestmarket.Model.Business;
import edu.famu.thecoldestmarket.Services.BusinessService;
import edu.famu.thecoldestmarket.util.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("business")
//hello
public class BusinessController {
    private final BusinessService businessService;

    public BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }

    @GetMapping
    public ResponseEntity<ApiResponse> getAllBusiness() {
        try {
            return ResponseEntity.ok(new ApiResponse(true, "Success", businessService.getAllBusinesses(), null));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred.", null, e.getMessage()));
        }
    }

    @GetMapping("/{businessId}")
    public ResponseEntity<ApiResponse> getBusinessById(@PathVariable String businessId) {
        try {
            return ResponseEntity.ok(new ApiResponse(true, "Success", businessService.getBusinessById(businessId), null));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred.", null, e.getMessage()));
        }
    }

    @PostMapping
    public ResponseEntity<ApiResponse> createNewBusiness(@RequestBody Business business)
    {
        try{
            return ResponseEntity.ok(new ApiResponse(true, "Success", businessService.createBusiness(business), null));
        } catch (ExecutionException e) {
            return ResponseEntity.status(401).body(new ApiResponse(false, "An error occurred", null, e.getMessage()));
        } catch (InterruptedException e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred", null, e.getMessage()));
        }
    }

    @PutMapping("/{businessId}")
    public ResponseEntity<ApiResponse> updateBusiness(@PathVariable(name="businessId") String id, @RequestBody Map<String,String> data)
    {
        try{
            businessService.updateBusiness(id, data);
            return ResponseEntity.ok(new ApiResponse(true, "Passenger successfully updated", null, null));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred", null, e.getMessage()));
        }
    }

    @DeleteMapping("/{businessId}")
    public ResponseEntity<ApiResponse> deleteBusiness(@PathVariable(name="businessId") String id) {
        try {
            businessService.deleteBusiness(id);
            return ResponseEntity.ok(new ApiResponse(true, "Business successfully deleted", null, null));
        }
        catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred.", null, e.getMessage()));
        }
    }
}