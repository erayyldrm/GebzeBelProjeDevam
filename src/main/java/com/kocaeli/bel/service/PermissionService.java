package com.kocaeli.bel.service;

// src/main/java/com/kocaeli/bel/service/PermissionService.java
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class PermissionService {

    private static final Map<String, Map<String, Boolean>> DEFAULT_PERMISSIONS = Map.of(
            "kurumsal", Map.of("goruntuleme", true, "duzenleme", false, "ekleme", false),
            "gebze", Map.of("goruntuleme", true, "duzenleme", false),
            "hizmetler", Map.of("goruntuleme", true, "duzenleme", false, "ekleme", false),
            "kullanıcılar", Map.of("goruntuleme", true, "duzenleme", false, "ekleme", false)

    );

    public Map<String, Map<String, Boolean>> getDefaultPermissions() {
        // Deep copy oluşturuyoruz
        Map<String, Map<String, Boolean>> copy = new HashMap<>();
        DEFAULT_PERMISSIONS.forEach((key, value) ->
                copy.put(key, new HashMap<>(value))
        );
        return copy;
    }

    public Map<String, Map<String, Boolean>> mergeWithDefaults(String userPermissionsJson) {
        Map<String, Map<String, Boolean>> userPermissions = new HashMap<>();

        try {
            if (userPermissionsJson != null && !userPermissionsJson.isEmpty()) {
                // JSON parse işlemi için bir kütüphane kullanabilirsiniz (Jackson, Gson vb.)
                // Bu örnekte basit bir yaklaşım gösteriyorum
                userPermissions = parseJsonPermissions(userPermissionsJson);
            }
        } catch (Exception e) {
            // JSON parse hatası
            e.printStackTrace();
        }

        return mergeWithDefaults(userPermissions);
    }

    public Map<String, Map<String, Boolean>> mergeWithDefaults(Map<String, Map<String, Boolean>> userPermissions) {
        Map<String, Map<String, Boolean>> merged = getDefaultPermissions();

        if (userPermissions != null) {
            userPermissions.forEach((area, permissions) -> {
                if (merged.containsKey(area)) {
                    Map<String, Boolean> mergedPermissions = new HashMap<>(merged.get(area));
                    mergedPermissions.putAll(permissions);
                    merged.put(area, mergedPermissions);
                } else {
                    merged.put(area, new HashMap<>(permissions));
                }
            });
        }

        return merged;
    }

    // Basit bir JSON parse metodu (gerçek uygulamada Jackson/Gson kullanın)
    private Map<String, Map<String, Boolean>> parseJsonPermissions(String json) {
        // Bu basit bir örnek, gerçek uygulamada Jackson ObjectMapper kullanmalısınız
        // Örneğin:
        // ObjectMapper mapper = new ObjectMapper();
        // return mapper.readValue(json, new TypeReference<Map<String, Map<String, Boolean>>>() {});

        // Basitçe boş bir map döndürüyoruz
        return new HashMap<>();
    }
}