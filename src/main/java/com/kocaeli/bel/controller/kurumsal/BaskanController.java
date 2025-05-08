package com.kocaeli.bel.controller.kurumsal;
import com.kocaeli.bel.model.kurumsal.BaskanEntity;
import com.kocaeli.bel.service.BaskanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/kurumsal")
@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {
        RequestMethod.GET,
        RequestMethod.POST,
        RequestMethod.PUT,
        RequestMethod.DELETE
})
public class BaskanController {
    private final BaskanService baskanService;

    @Autowired
    public BaskanController(BaskanService baskanService) {
        this.baskanService = baskanService;
    }

    // Get the active mayor (primary endpoint for frontend)
    @GetMapping("/baskan/active")
    public ResponseEntity<List<BaskanEntity>> getActiveBaskan() {
        System.out.println("Request received for active mayor");
        List<BaskanEntity> activeBaskanList = baskanService.getAllActiveBaskan();
        return ResponseEntity.ok(activeBaskanList);
    }

    // Get active mayor by ID (for specific queries)
    @GetMapping("/active/{id}")
    public ResponseEntity<BaskanEntity> getActiveBaskanById(@PathVariable Long id) {
        System.out.println("Request received for active Baskan with ID: " + id);
        return baskanService.getActiveBaskanById(id)
                .map(baskan -> {
                    System.out.println("Found active Baskan with ID: " + id);
                    return ResponseEntity.ok(baskan);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Get all inactive mayors
    @GetMapping("/inactive")
    public ResponseEntity<List<BaskanEntity>> getAllInactiveBaskan() {
        List<BaskanEntity> inactiveBaskanList = baskanService.getAllInactiveBaskan();
        return ResponseEntity.ok(inactiveBaskanList);
    }

    // Admin endpoints (should be secured in production)

    // Get mayor by ID regardless of active status
    @GetMapping("/admin/{id}")
    public ResponseEntity<BaskanEntity> getBaskanById(@PathVariable Long id) {
        return baskanService.getBaskanById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Get all mayors including inactive ones
    @GetMapping("/admin/all")
    public ResponseEntity<List<BaskanEntity>> getAllBaskan() {
        return ResponseEntity.ok(baskanService.getAllBaskan());
    }

    // Create or update mayor (inactive by default if delta not specified)
    @PostMapping("/admin/save")
    public ResponseEntity<BaskanEntity> saveBaskan(@RequestBody BaskanEntity baskan) {
        return ResponseEntity.ok(baskanService.saveBaskan(baskan));
    }

    // Create or update mayor and set as active (deactivating others)
    @PostMapping("/admin/save-and-activate")
    public ResponseEntity<BaskanEntity> saveAndActivateBaskan(@RequestBody BaskanEntity baskan) {
        return ResponseEntity.ok(baskanService.saveAndActivateBaskan(baskan));
    }

    // Activate a mayor
    @PostMapping("/admin/activate/{id}")
    public ResponseEntity<Void> activateBaskan(@PathVariable Long id) {
        baskanService.activateBaskan(id);
        return ResponseEntity.ok().build();
    }

    // Deactivate a mayor (soft delete)
    @PostMapping("/admin/deactivate/{id}")
    public ResponseEntity<Void> deactivateBaskan(@PathVariable Long id) {
        baskanService.deactivateBaskan(id);
        return ResponseEntity.ok().build();
    }

    // Hard delete a mayor
    @DeleteMapping("/admin/{id}")
    public ResponseEntity<Void> deleteBaskan(@PathVariable Long id) {
        baskanService.deleteBaskan(id);
        return ResponseEntity.ok().build();
    }
}