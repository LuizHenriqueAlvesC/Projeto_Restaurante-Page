class MoldelRestaurants {
  title: string
  description: string
  avaliable: number
  infos: string[]
  image: string
  id: number

  constructor(
    id: number,
    title: string,
    description: string,
    infos: string[],
    image: string,
    avaliable: number
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.avaliable = avaliable
    this.infos = infos
    this.image = image
  }
}

export default MoldelRestaurants
