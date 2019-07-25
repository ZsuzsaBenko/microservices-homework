package com.codecool.videoservice.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Recommendation {
    private Long id;
    private Integer rating;
    private String comment;
    private Long videoId;
    private LocalDateTime creationTime;
}
