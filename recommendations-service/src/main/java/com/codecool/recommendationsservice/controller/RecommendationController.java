package com.codecool.recommendationsservice.controller;

import com.codecool.recommendationsservice.model.Recommendation;
import com.codecool.recommendationsservice.service.RecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recommendations")
public class RecommendationController {

    @Autowired
    RecommendationService recommendationService;

    @GetMapping("/{videoId}/list")
    public List<Recommendation> getOrderedRecommendations(@PathVariable Long videoId) {
        return recommendationService.getOrderedRecommendationsForVideo(videoId);
    }

    @PostMapping("/save")
    public Recommendation saveNewRecommendation(@RequestBody Recommendation recommendation) {
        return recommendationService.saveNewRecommendation(recommendation);
    }

    @PutMapping("/update")
    public Recommendation updateRecommendation(@RequestBody Recommendation recommendation) {
        return recommendationService.updateRecommendation(recommendation);
    }
}
