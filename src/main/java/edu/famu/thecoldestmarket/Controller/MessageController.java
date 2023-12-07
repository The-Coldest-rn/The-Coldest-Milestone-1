package edu.famu.thecoldestmarket.Controller;

import edu.famu.thecoldestmarket.Model.Message;
import edu.famu.thecoldestmarket.Services.MessageService;
import edu.famu.thecoldestmarket.util.ApiResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.concurrent.ExecutionException;
@RestController
@RequestMapping("/message")
public class MessageController {


    private final MessageService messageService;

    public MessageController(MessageService messageService) {
        this.messageService = messageService;
    }
    @GetMapping
    public ResponseEntity<ApiResponse> getAllMessages() {
        try {
            return ResponseEntity.ok(new ApiResponse(true, "Success", messageService.getAllMessages(), null));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred.", null, e.getMessage()));
        }
    }

    @GetMapping("/{messageID}")
    public ResponseEntity<ApiResponse> getMessageById(@PathVariable String messageID) {
        try {
            return ResponseEntity.ok(new ApiResponse(true, "Success", messageService.getMessageById(messageID), null));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred.", null, e.getMessage()));
        }
    }

    @PostMapping
    public ResponseEntity<ApiResponse> createNewMessage(@RequestBody Message message)
    {
        try{
            return ResponseEntity.ok(new ApiResponse(true, "Success", messageService.createMessage(message), null));
        } catch (ExecutionException e) {
            return ResponseEntity.status(401).body(new ApiResponse(false, "An error occurred", null, e.getMessage()));
        } catch (InterruptedException e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred", null, e.getMessage()));
        }
    }


    @PutMapping("/{messageID}")
    public ResponseEntity<ApiResponse> updateMessage(@PathVariable(name="messageID") String id, @RequestBody Map<String,String> data)
    {
        try{
            messageService.updateMessage(id, data);
            return ResponseEntity.ok(new ApiResponse(true, "message successfully updated", null, null));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred", null, e.getMessage()));
        }
    }

    @DeleteMapping("/{messageID}")
    public ResponseEntity<ApiResponse> deleteMessage(@PathVariable(name="messageID") String id) {
        try {
            messageService.deleteMessage(id);
            return ResponseEntity.ok(new ApiResponse(true, "message successfully deleted", null, null));
        }
        catch (Exception e) {
            return ResponseEntity.status(500).body(new ApiResponse(false, "An error occurred.", null, e.getMessage()));
        }
    }

}
