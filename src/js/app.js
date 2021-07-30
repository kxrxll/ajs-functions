export default function calculateHealth(heroObj) {
  if (heroObj.health === 100) {
    return 'healthy';
  } if (heroObj.health < 100 && heroObj.health > 20) {
    return 'wounded';
  }
  return 'critical';
}
