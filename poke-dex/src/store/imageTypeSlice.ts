import { POKEMON_IMAGE_TYPE } from './../constants/constant';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type PokemonImageType = typeof POKEMON_IMAGE_TYPE[keyof typeof POKEMON_IMAGE_TYPE];

export interface ImageTypeState {
  type : PokemonImageType
}

const initialState : ImageTypeState = {
  type : POKEMON_IMAGE_TYPE.OFFICIAL_ARTWORK
}

export const imageTypeSlice = createSlice ({
  name : "imageType",
  initialState,
  reducers : {
    changeImageType : (state, action : PayloadAction<ImageTypeState>) => {
      state.type = action.payload.type;
    },
  },
})

  export const {changeImageType} = imageTypeSlice.actions;

  export const imageTypeReducer = imageTypeSlice.reducer;