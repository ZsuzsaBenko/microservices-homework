package com.codecool.recommendationsservice.repository;

import com.codecool.recommendationsservice.model.Recommendation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface RecommendationRepository extends JpaRepository<Recommendation, Long> {
    
    List<Recommendation> findAllByVideoIdOrderByCreationTimeDesc(Long videoId);
}
