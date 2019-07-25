package com.codecool.recommendationsservice.service;

import com.codecool.recommendationsservice.model.Recommendation;
import com.codecool.recommendationsservice.repository.RecommendationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecommendationService {

    @Autowired
    private RecommendationRepository recommendationRepository;

    public List<Recommendation> getOrderedRecommendationsForVideo(Long videoId) {
        return recommendationRepository.findAllByVideoIdOrderByCreationTimeDesc(videoId);
    }

    public Recommendation saveNewRecommendation(Recommendation newRecommendation) {
        recommendationRepository.save(newRecommendation);
        return newRecommendation;
    }

    public Recommendation updateRecommendation(Recommendation updatedRecommendation) {
        Recommendation target = recommendationRepository.findById(updatedRecommendation.getId()).orElse(null);
        if (target != null) {
            target.setComment(updatedRecommendation.getComment());
            target.setRating(updatedRecommendation.getRating());
            recommendationRepository.save(target);
        }
        return target;
    }
}
