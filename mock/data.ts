export const mockCivilizations = [
    {
      "id": 1,
      "name": "Aztecs",
      "expansion": "The Conquerors",
      "army_type": "Infantry and Monk",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/jaguar_warrior"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/garland_wars"
      ],
      "team_bonus": "Relics generate +33% gold",
      "civilization_bonus": [
        "Villagers carry +5",
        "Military units created 15% faster",
        "+5 Monk hit points for each Monastery technology",
        "Loom free"
      ]
    },
    {
      "id": 2,
      "name": "Britons",
      "expansion": "Age of Kings",
      "army_type": "Foot Archer",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/longbowman"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/yeomen"
      ],
      "team_bonus": "Archery Ranges work 20% faster",
      "civilization_bonus": [
        "Town Centers cost -50% wood upon reaching the Castle Age",
        "Foot archers (excluding Skirmishers) have +1 range in Castle Age and +1 in Imperial Age (for +2 total)",
        "Shepherds work 25% faster"
      ]
    },
    {
      "id": 3,
      "name": "Byzantines",
      "expansion": "Age of Kings",
      "army_type": "Defensive",
      "unique_unit": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/unit/cataphract"
      ],
      "unique_tech": [
        "https://age-of-empires-2-api.herokuapp.com/api/v1/technology/logistica"
      ],
      "team_bonus": "Monks +50% heal speed",
      "civilization_bonus": [
        "Buildings (except gates) have +10% HP in Dark Age / +20% HP in Feudal Age  / +30% in Castle Age / +40% in Imperial Age",
        "Spearman skirmisher and camel lines cost 25% less",
        "Fire Ships attack 20% faster",
        "Imperial Age costs -33%",
        "Town Watch is free"
      ]
    },
  ]