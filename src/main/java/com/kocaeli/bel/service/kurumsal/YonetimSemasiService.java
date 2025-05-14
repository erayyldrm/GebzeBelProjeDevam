package com.kocaeli.bel.service.kurumsal;

import com.kocaeli.bel.model.kurumsal.YonetimSemasiEntity;
import com.kocaeli.bel.repository.kurumsal.YonetimSemasiRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    public List<YonetimSemasiEntity> getAllYonetimSemasi() {
        return yonetimSemasiRepository.findAllOrderByPositionAndOrder();
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

    public List<YonetimSemasiEntity> getByPozisyon(String pozisyon) {
        return yonetimSemasiRepository.findByPozisyon(pozisyon);
    }

    public Optional<YonetimSemasiEntity> getById(Long id) {
        return yonetimSemasiRepository.findById(id);
    }

    public YonetimSemasiEntity saveYonetimSemasi(YonetimSemasiEntity yonetimSemasi) {
        return yonetimSemasiRepository.save(yonetimSemasi);
    }

    public void deleteYonetimSemasi(Long id) {
        yonetimSemasiRepository.deleteById(id);
    }
}
