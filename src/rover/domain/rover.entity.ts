export class Rover {
  private position: { x: number; y: number };
  private direction: string;
  private directionMap: { [key: string]: string[] };

  constructor(x = 0, y = 0, direction = 'N') {
    this.position = { x, y };
    this.direction = direction;
    this.directionMap = {
      N: ['W', 'E'],
      E: ['N', 'S'],
      S: ['E', 'W'],
      W: ['S', 'N'],
    };
  }

  isValidMove(plateauDimension: [number, number]): boolean {
    switch (this.direction) {
      case 'N':
        return this.position.y + 1 <= plateauDimension[1];
      case 'E':
        return this.position.x + 1 <= plateauDimension[0];
      case 'S':
        return this.position.y - 1 >= 0;
      case 'W':
        return this.position.x - 1 >= 0;
    }
  }

  move(): void {
    switch (this.direction) {
      case 'N':
        this.position.y++;
        break;
      case 'E':
        this.position.x++;
        break;
      case 'S':
        this.position.y--;
        break;
      case 'W':
        this.position.x--;
        break;
    }
  }

  rotate(command: string): void {
    if (command === 'L') {
      this.direction = this.directionMap[this.direction][0];
    } else if (command === 'R') {
      this.direction = this.directionMap[this.direction][1];
    }
  }

  getFullPosition(): string {
    return `${this.position.x} ${this.position.y} ${this.direction}`;
  }

  getPosition(): { x: number; y: number } {
    return this.position;
  }

  getDirection(): string {
    return this.direction;
  }
}
