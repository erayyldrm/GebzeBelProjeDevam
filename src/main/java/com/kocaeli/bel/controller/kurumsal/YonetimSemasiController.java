package com.kocaeli.bel.controller.kurumsal;

import com.kocaeli.bel.model.kurumsal.YonetimSemasiEntity;
import com.kocaeli.bel.service.kurumsal.YonetimSemasiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/kurumsal")
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:5173"}, allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE})
public class YonetimSemasiController {
    private final YonetimSemasiService yonetimSemasiService;

    @Autowired
    public YonetimSemasiController(YonetimSemasiService yonetimSemasiService) {
        this.yonetimSemasiService = yonetimSemasiService;
    }

    @GetMapping("/yonetimsemasi")
    public ResponseEntity<Map<String, List<YonetimSemasiEntity>>> getYonetimSemasi() {
        Map<String, List<YonetimSemasiEntity>> response = new HashMap<>();
        response.put("baskan", yonetimSemasiService.getBaskan());
        response.put("baskanYardimcilari", yonetimSemasiService.getBaskanYardimcilari());
        return ResponseEntity.ok(response);
    }
}
