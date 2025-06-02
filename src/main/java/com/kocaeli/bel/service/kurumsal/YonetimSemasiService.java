package com.kocaeli.bel.service.kurumsal;

import com.kocaeli.bel.model.kurumsal.YonetimSemasiEntity;
import com.kocaeli.bel.repository.kurumsal.YonetimSemasiRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class YonetimSemasiService {
    private final YonetimSemasiRepository yonetimSemasiRepository;

    @Autowired
    public YonetimSemasiService(YonetimSemasiRepository yonetimSemasiRepository) {
        this.yonetimSemasiRepository = yonetimSemasiRepository;
    }

    public List<YonetimSemasiEntity> getBaskan() {
        return yonetimSemasiRepository.findBaskan();
    }

    public List<YonetimSemasiEntity> getBaskanYardimcilari() {
        return yonetimSemasiRepository.findBaskanYardimcilari();
    }

    public List<YonetimSemasiEntity> getBaskanDanismanlari() {
        return yonetimSemasiRepository.findBaskanDanismanlari();
    }

    public Page<YonetimSemasiEntity> getAllBaskanYardimcilari(Pageable pageable, Boolean aktif, String search) {
        Integer delta = (aktif == null) ? null : (aktif ? 1 : 0);
        return yonetimSemasiRepository.findBaskanYardimcilariWithFilters(delta, search, pageable);
    }

    public Optional<YonetimSemasiEntity> getBaskanYardimcisiById(Long id) {
        return yonetimSemasiRepository.findById(id)
                .filter(entity -> "Başkan Yardımcısı".equals(entity.getPozisyon()));
    }

    public YonetimSemasiEntity saveBaskanYardimcisi(YonetimSemasiEntity baskanYardimcisi) {
        baskanYardimcisi.setPozisyon("Başkan Yardımcısı");
        if (baskanYardimcisi.getDelta() == null) {
            baskanYardimcisi.setDelta(1);
        }
        return yonetimSemasiRepository.save(baskanYardimcisi);
    }

    public void deleteBaskanYardimcisi(Long id) {
        yonetimSemasiRepository.deleteById(id);
    }

    public void deleteBaskanYardimcilari(List<Long> ids) {
        yonetimSemasiRepository.deleteAllById(ids);
    }
}