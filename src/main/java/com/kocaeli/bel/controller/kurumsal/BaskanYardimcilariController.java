package com.kocaeli.bel.controller.kurumsal;

import com.kocaeli.bel.model.kurumsal.YonetimSemasiEntity;
import com.kocaeli.bel.service.kurumsal.YonetimSemasiService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/kurumsal")
@CrossOrigin(origins = "*")
public class BaskanYardimcilariController {

    private final YonetimSemasiService yonetimSemasiService;

    public BaskanYardimcilariController(YonetimSemasiService yonetimSemasiService) {
        this.yonetimSemasiService = yonetimSemasiService;
    }


    @GetMapping("/baskanyardimcilari")
    public ResponseEntity<Map<String, Object>> getAllBaskanYardimcilari(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) Boolean aktif,
            @RequestParam(required = false) String search) {

        Page<YonetimSemasiEntity> pageResult = yonetimSemasiService
                .getAllBaskanYardimcilari(PageRequest.of(page, size), aktif, search);

        Map<String, Object> response = new HashMap<>();
        response.put("content", pageResult.getContent());
        response.put("totalElements", pageResult.getTotalElements());
        response.put("totalPages", pageResult.getTotalPages());
        response.put("currentPage", pageResult.getNumber());

        return ResponseEntity.ok(response);
    }

    @GetMapping("/baskanyardimcilari/{id}")
    public ResponseEntity<YonetimSemasiEntity> getBaskanYardimcisiById(@PathVariable Long id) {
        return yonetimSemasiService.getBaskanYardimcisiById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/baskanyardimcilari")
    public ResponseEntity<YonetimSemasiEntity> createBaskanYardimcisi(
            @RequestBody YonetimSemasiEntity baskanYardimcisi) {
        return ResponseEntity.ok(yonetimSemasiService.saveBaskanYardimcisi(baskanYardimcisi));
    }

    @PutMapping("/baskanyardimcilari/{id}")
    public ResponseEntity<YonetimSemasiEntity> updateBaskanYardimcisi(
            @PathVariable Long id,
            @RequestBody YonetimSemasiEntity baskanYardimcisi) {
        baskanYardimcisi.setId(id);
        return ResponseEntity.ok(yonetimSemasiService.saveBaskanYardimcisi(baskanYardimcisi));
    }

    @DeleteMapping("/baskanyardimcilari/{id}")
    public ResponseEntity<Void> deleteBaskanYardimcisi(@PathVariable Long id) {
        yonetimSemasiService.deleteBaskanYardimcisi(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/baskanyardimcilari/bulk")
    public ResponseEntity<Void> deleteBaskanYardimcilari(@RequestBody Map<String, List<Long>> ids) {
        yonetimSemasiService.deleteBaskanYardimcilari(ids.get("ids"));
        return ResponseEntity.ok().build();
    }
}