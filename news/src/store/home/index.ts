import { IHomeState } from "@/typings";
import { Module } from "vuex";
import { IGlobalState } from "..";

import state from './state';

const homeModule: Module<IHomeState, IGlobalState> = {
  namespaced: true,
  state
}

export default homeModule;