const u = (id: string, w = 1600) => `https://images.unsplash.com/${id}?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=${w}`

export const images = {
  upstream: u('photo-1784915478622-ba6c29a4cdbb', 1000),
  midstream: u('photo-1639600993675-2281b2c939f0', 1000),
  downstream: u('photo-1656988826404-bbb5ccb779bc', 1000),
  power: u('photo-1789676965156-f880587af2c7', 1200),
  epc: u('photo-1504307651254-35680f356dfd', 1000),
  solarHill: u('photo-1786350125539-228248ef26c3'),
  dhaka: u('photo-1706640254398-3b04782e8c76'),
  rig: u('photo-1784915474323-6b84bb2ed040', 1000),
  crane: u('photo-1527335988388-b40ee248d80c', 1000),
}
