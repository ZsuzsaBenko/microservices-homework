package com.codecool.videoservice.controller;

import com.codecool.videoservice.model.Recommendation;
import com.codecool.videoservice.model.Video;
import com.codecool.videoservice.model.VideoDetails;
import com.codecool.videoservice.service.VideoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/videos")
public class VideoController {

    @Autowired
    private VideoService videoService;

    @GetMapping("/all")
    public List<Video> getAllVideos() {
        return videoService.getAllVideos();
    }

    @GetMapping("/{id}")
    public VideoDetails getVideoDetails(@PathVariable Long id) {
        return videoService.getVideoDetails(id);
    }

    @PostMapping("/{id}/recommendation")
    public Recommendation saveNewRecommendation(@PathVariable Long id,
                                                @RequestBody Recommendation recommendation) {
        return videoService.saveNewRecommendation(recommendation);
    }

    @PutMapping("/{id}/recommendation")
    public Recommendation updateRecommendation(@PathVariable Long id,
                                               @RequestBody Recommendation recommendation) {
        return videoService.updateRecommendation(recommendation);
    }
}
