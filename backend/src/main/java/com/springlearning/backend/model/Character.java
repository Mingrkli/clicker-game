package com.springlearning.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "character_list")
@AllArgsConstructor // Creates Constructor with arguments
@NoArgsConstructor // Creates Default Constructors
@Data // Creates Setters, Getters, toString, Equals, and HashCode
@Builder
public class Character {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    // Profile
    private String name;
    private int level;
    // Resources
    private int health;
    private int healthMax;
    private int mana;
    private int manaMax;
    private int xp;
    private int xpMax;
    // Stats
    private int attack;
    private int defense;
}
