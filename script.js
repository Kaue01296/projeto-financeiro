// FIX BUG
var todayStr = new Date().toISOString().split('T')[0];

// STATE
var gastos    = JSON.parse(localStorage.getItem('fc2_gastos')    || '[]');
var receitas  = JSON.parse(localStorage.getItem('fc2_receitas')  || '[]');
var provisoes = JSON.parse(localStorage.getItem('fc2_provisoes') || '[]');

function save(){
  localStorage.setItem('fc2_gastos',JSON.stringify(gastos));
  localStorage.setItem('fc2_receitas',JSON.stringify(receitas));
  localStorage.setItem('fc2_provisoes',JSON.stringify(provisoes));
}

function goTab(tab,btn){
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
  document.getElementById('tab-'+tab)?.classList.add('active');
  btn.classList.add('active');
}

// exemplo funcional simples
function toast(msg){
  alert(msg);
}

// EXEMPLO ADICIONAR GASTO
function addGasto(){
  gastos.push({valor:100});
  save();
  toast("Gasto adicionado");
}