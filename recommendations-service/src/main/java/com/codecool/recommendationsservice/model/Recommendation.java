package com.codecool.recommendationsservice.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Recommendation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "Recommendation_Gen")
    @TableGenerator(name = "Recommendation_Gen", initialValue = 22, allocationSize = 1)
    private Long Id;

    @Column(nullable = false)
    private Integer rating;

    @Column(nullable = false)
    private String comment;

    @Column(nullable = false)
    private Long videoId;

    @CreationTimestamp
    private LocalDateTime creationTime;
}
