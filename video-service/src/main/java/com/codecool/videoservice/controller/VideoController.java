package com.codecool.videoservice.controller;

import com.codecool.videoservice.model.Recommendation;
import com.codecool.videoservice.model.Video;
import com.codecool.videoservice.model.VideoDetails;
import com.codecool.videoservice.service.VideoService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/videos")
@Slf4j
public class VideoController {

    @Autowired
    private VideoService videoService;

    @GetMapping("/all")
    public List<Video> getAllVideos() {
        log.info("All videos requested.");
        return videoService.getAllVideos();
    }

    @GetMapping("/{id}")
    public VideoDetails getVideoDetails(@PathVariable Long id) {
        log.info("Video with id " + id + " requested.");
        return videoService.getVideoDetails(id);
    }

    @PostMapping("/{id}/recommendation")
    public Recommendation saveNewRecommendation(@PathVariable Long id,
                                                @RequestBody Recommendation recommendation) {
        log.info("New recommendation sent for video " + id + ".");
        return videoService.saveNewRecommendation(recommendation);
    }

    @PutMapping("/{id}/recommendation")
    public Recommendation updateRecommendation(@PathVariable Long id,
                                               @RequestBody Recommendation recommendation) {
        log.info("New update for recommendation " + id + ".");
        return videoService.updateRecommendation(recommendation);
    }
}
