export function isNewHit(cords, hits, missedHits) {
  return !(
    hits.some((element) => element == cords) &&
    missedHits.some((element) => element == cords)
  );
}
