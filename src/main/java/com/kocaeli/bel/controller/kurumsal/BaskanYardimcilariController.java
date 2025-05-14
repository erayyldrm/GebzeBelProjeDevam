package com.kocaeli.bel.controller.kurumsal;

import com.kocaeli.bel.model.kurumsal.YonetimSemasiEntity;
import com.kocaeli.bel.service.kurumsal.YonetimSemasiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/kurumsal")
@CrossOrigin(origins = "*")
public class BaskanYardimcilariController {

    private final YonetimSemasiService yonetimSemasiService;

    @Autowired
    public BaskanYardimcilariController(YonetimSemasiService yonetimSemasiService) {
        this.yonetimSemasiService = yonetimSemasiService;
    }

    @GetMapping("/baskanyardimcilari")
    public ResponseEntity<List<YonetimSemasiEntity>> getBaskanYardimcilari() {
        // YonetimSemasiService'den yalnızca başkan yardımcılarını alıyoruz
        return ResponseEntity.ok(yonetimSemasiService.getBaskanYardimcilari());
    }
}
