<template>
  <div id="app">
    <app-registration></app-registration>
    <app-registrations></app-registrations>
  </div>
</template>

<script>
import Registration from './components/Registration'
import Registrations from './components/Registrations'

export default {
  components: {
    appRegistration: Registration,
    appRegistrations: Registrations,
  }
}
</script>