<template>
  <v-row
    id="about"
    justify="center"
  >
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-card ref="form">
        <v-card-text>
          Cep: {{ getTextoBuscar }}
          <v-text-field
            ref="rua"
            v-model="endereco.rua"
            label="Rua"
            placeholder="Rua"
            required
          />
          <v-text-field
            ref="endereco"
            v-model="endereco.bairro"
            label="Bairro"
            placeholder="Bairro"
            required
          />
          <v-text-field
            ref="cidade"
            v-model="endereco.cidade"
            label="Cidade"
            placeholder="Cidade"
            required
          />
          <v-text-field
            ref="estado"
            v-model="endereco.estado"
            label="Estado"
            required
            placeholder="PR"
          />
          <v-text-field
            ref="pais"
            v-model="endereco.pais"
            label="País"
            required
            placeholder="País"
          />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex';
import { buscarCorreios } from './About.service.js';

export default {
  name: 'About',
  data() {
    return {
      endereco: {
        rua: null,
        bairro: null,
        cidade: null,
        estado: null,
        pais: null,
        status: false,
      },
    };
  },
  computed: {
    ...mapGetters(['getTextoBuscar']),
  },
  watch: {
    getTextoBuscar(newValue) {
      this.init(newValue);
    },
  },
  methods: {
    async init(params) {
      const { data } = await buscarCorreios(params);
      console.log(data, 'dereco')
      this.endereco = {
        rua: data.Endereco,
        bairro: data.Bairro,
        cidade: data.Cidade,
        estado: data.UF,
        pais: data.Pais,
        status: data.Status,
      }
    },
  },
};
</script>

<style scoped>
#about {
  margin: 2%;
}
</style>
