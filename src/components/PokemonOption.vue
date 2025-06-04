<template>
  <div class="options-container">
    <ul>
        <li>P1</li>
        <li>P2</li>
        <li>P3</li>
        <li>P4</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
ul {
    list-style-type: none;
}

li {
    background: #46c37a;
    border-radius: 5px;
    border: 1px solid skyblue;
    cursor: pointer;
    margin-bottom: 10px;
    width: 150px;
}

.options-container {
    display: flex;
    justify-content: center;
}

li:hover {
    background: lemonchiffon;
}
</style>