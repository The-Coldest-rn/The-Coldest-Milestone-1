package edu.famu.thecoldestmarket.Controller;
import edu.famu.thecoldestmarket.Services.BusinessService;
import edu.famu.thecoldestmarket.util.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("business")
//hello
public class BusinessController {
    private BusinessService businessService;

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
}