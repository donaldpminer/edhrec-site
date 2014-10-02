app.constant("settings", {
  TAPPED_OUT_HOSTNAME: "tappedout.net",
  EDHREC_API_URL: "http://edhrec.com/rec",
  API_REF: "kevin",
  MAX_TOP_RECOMMENDATIONS: 12,
  MAX_RECOMMENDATIONS_PER_TYPE: 15,
  SAMPLE_RECOMMENDATIONS_URL: "public/sample_recommendations.txt",
  SAMPLE_DECK_URL: "http://tappedout.net/mtg-decks/30-09-14-rhys-the-redeemed/"
});

app.constant("types", {
  CREATURE: "Creature",
  LAND: "Land",
  ARTIFACT: "Artifact",
  ENCHANTMENT: "Enchantment",
  INSTANT: "Instant",
  SORCERY: "Sorcery",
  PLANESWALKER: "Planeswalker"
});