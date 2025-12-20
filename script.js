let expenses = [];
let currentFilter = 'tutte';

// Carica spese dal localStorage
function loadExpenses() {
    const saved = localStorage.getItem('expenses');
    if (saved) {
        expenses = JSON.parse(saved);
        renderExpenses();
    }
}

// Salva spese nel localStorage
function saveExpenses() {
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

// Aggiungi spesa
function addExpense() {
    const description = document.getElementById('description').value.trim();
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    // Validazione
    if (!description) {
        alert('Inserisci una descrizione!');
        return;
    }

    if (!amount || amount <= 0) {
        alert('Inserisci un importo valido!');
        return;
    }

    // Crea oggetto spesa
    const expense = {
        id: Date.now(),
        description: description,
        amount: amount,
        category: category
    };

    expenses.push(expense);
    saveExpenses();
    renderExpenses();

    // Reset form
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

// Elimina spesa
function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    saveExpenses();
    renderExpenses();
}

// Calcola totale
function calculateTotal() {
    const filtered = currentFilter === 'tutte'
        ? expenses
        : expenses.filter(e => e.category === currentFilter);

    return filtered.reduce((sum, expense) => sum + expense.amount, 0);
}

// Renderizza spese
function renderExpenses() {
    const expensesList = document.getElementById('expensesList');
    const totalAmount = document.getElementById('totalAmount');

    const filtered = currentFilter === 'tutte'
        ? expenses
        : expenses.filter(e => e.category === currentFilter);

    if (filtered.length === 0) {
        expensesList.innerHTML = '<div class="empty-message">Nessuna spesa inserita</div>';
    } else {
        expensesList.innerHTML = filtered.map(expense => {
            const isHigh = expense.amount > 100;
            return `
                <div class="expense-item ${isHigh ? 'high-expense' : ''}">
                    <div class="expense-info">
                        <div class="expense-description">${expense.description}</div>
                        <span class="expense-category category-${expense.category}">
                            ${getCategoryIcon(expense.category)} ${expense.category.charAt(0).toUpperCase() + expense.category.slice(1)}
                        </span>
                    </div>
                    <div class="expense-amount">€ ${expense.amount.toFixed(2)}</div>
                    <button class="delete-btn" onclick="deleteExpense(${expense.id})">Elimina</button>
                </div>
            `;
        }).join('');
    }

    totalAmount.textContent = `€ ${calculateTotal().toFixed(2)}`;
}

// Icone categorie
function getCategoryIcon(category) {
    const icons = {
        cibo: '🍕',
        trasporti: '🚗',
        svago: '🎮',
        altro: '📦'
    };
    return icons[category] || '📦';
}

// Reset tutte le spese
function resetExpenses() {
    if (expenses.length === 0) return;

    if (confirm('Sei sicuro di voler eliminare tutte le spese?')) {
        expenses = [];
        saveExpenses();
        renderExpenses();
    }
}

// Gestione filtri
function setFilter(filter) {
    currentFilter = filter;

    // Aggiorna pulsanti
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === filter) {
            btn.classList.add('active');
        }
    });

    renderExpenses();
}

// Event listeners
document.getElementById('addExpenseBtn').addEventListener('click', addExpense);
document.getElementById('resetBtn').addEventListener('click', resetExpenses);

// Enter per aggiungere spesa
document.getElementById('amount').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addExpense();
    }
});

// Filtri
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        setFilter(this.dataset.filter);
    });
});

// Carica spese all'avvio
loadExpenses();