package com.codecool.videoservice.service;

import com.codecool.videoservice.model.Recommendation;
import com.codecool.videoservice.model.Video;
import com.codecool.videoservice.model.VideoDetails;
import com.codecool.videoservice.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class VideoService {

    @Autowired
    private VideoRepository videoRepository;

    @Autowired
    private RestTemplate restTemplate;

    @Value("${recommendations-service.url}")
    private String baseUrl;

    public List<Video> getAllVideos() {
        return videoRepository.findAll();
    }

    public VideoDetails getVideoDetails(Long id) {
        Video video = this.getVideoById(id);
        String url = baseUrl + "/" + video.getId() + "/list";
        List<Recommendation> result = restTemplate.getForEntity(url, ArrayList.class).getBody();

        return VideoDetails.builder()
                .id(video.getId())
                .name(video.getName())
                .url(video.getUrl())
                .recommendations(result)
                .build();
    }

    public Recommendation saveNewRecommendation(Recommendation recommendation) {
        HttpEntity<Recommendation> request = new HttpEntity<>(recommendation);
        String url = baseUrl + "/save";
        return restTemplate.postForObject(url, request, Recommendation.class);
    }

    public Recommendation updateRecommendation(Recommendation recommendation) {
        HttpEntity<Recommendation> request = new HttpEntity<>(recommendation);
        String url = baseUrl + "/update";
        return restTemplate.exchange(url, HttpMethod.PUT, request, Recommendation.class).getBody();
    }

    private Video getVideoById(Long videoId) {
        return videoRepository.findById(videoId).orElse(null);
    }
}
