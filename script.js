const contacts = [
    { name: "Juan Pérez", phone: "+34 600 000 001", lastMsg: "Llego en 5 min", time: "10:30", img: "https://i.pravatar.cc/150?u=juan" },
    { name: "María García", phone: "+34 600 000 002", lastMsg: "¡Qué increíble!", time: "09:15", img: "https://i.pravatar.cc/150?u=maria" },
    { name: "Carlos Ruiz", phone: "+34 600 000 003", lastMsg: "Mañana a las 8", time: "Ayer", img: "https://i.pravatar.cc/150?u=carlos" },
    { name: "Ana López", phone: "+34 600 000 004", lastMsg: "❤️", time: "Lunes", img: "https://i.pravatar.cc/150?u=ana" },
    { name: "Grupo Familia", phone: "5 integrantes", lastMsg: "Mamá: ¿Quién lava los platos?", time: "08:00", img: "https://i.pravatar.cc/150?u=fam" },
    { name: "Soporte Técnico", phone: "+34 912 345 678", lastMsg: "Su ticket ha sido cerrado", time: "07:45", img: "https://i.pravatar.cc/150?u=tech" },
    { name: "Lucía Méndez", phone: "+34 611 222 333", lastMsg: "Te mando la ubicación", time: "Domingo", img: "https://i.pravatar.cc/150?u=lucia" },
];

const searchInput = document.getElementById('searchInput');
const contactsList = document.getElementById('contactsList');

function renderContacts(filter = "") {
    contactsList.innerHTML = "";

    const filtered = contacts.filter(c =>
        c.name.toLowerCase().includes(filter.toLowerCase()) ||
        c.phone.includes(filter)
    );

    if (filtered.length === 0) {
        contactsList.innerHTML = `<div class="p-8 text-center text-zinc-500">No se encontraron contactos</div>`;
        return;
    }

    filtered.forEach(c => {
        const contactDiv = document.createElement('div');
        contactDiv.className = "flex items-center gap-4 p-4 hover:bg-zinc-800 cursor-pointer transition-colors border-b border-zinc-800/50";
        contactDiv.innerHTML = `
            <img src="${c.img}" class="size-12 rounded-full object-cover border border-zinc-700" alt="${c.name}">
            <div class="flex-1 min-w-0">
                <div class="flex justify-between items-baseline">
                    <h3 class="font-semibold text-zinc-100 truncate">${c.name}</h3>
                    <span class="text-xs text-zinc-500">${c.time}</span>
                </div>
                <div class="flex justify-between items-center">
                    <p class="text-sm text-zinc-400 truncate">${c.lastMsg}</p>
                    <span class="text-[10px] text-zinc-600 ml-2">${c.phone}</span>
                </div>
            </div>
        `;
        contactsList.appendChild(contactDiv);
    });
}

searchInput.addEventListener('input', (e) => renderContacts(e.target.value));

// Initial render
renderContacts();
