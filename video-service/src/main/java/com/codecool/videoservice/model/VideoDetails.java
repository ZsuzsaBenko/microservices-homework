package com.codecool.videoservice.model;

import lombok.*;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class VideoDetails {
    private Long id;
    private String name;
    private String url;

    @Singular
    private List<Recommendation> recommendations;

}
