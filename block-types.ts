import { Block } from "payload";

export interface CustomBlock extends Block {
  customBlockType?: 'alpha' | 'beta'
}
