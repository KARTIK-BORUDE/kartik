// Store members in local storage
let members = JSON.parse(localStorage.getItem('members')) || [];

// Function to display members in the table
function displayMembers() {
    const membersTable = document.getElementById('membersTable');
    membersTable.innerHTML = `
        <table style="width: 100%; border-collapse: collapse;">
            <thead>
                <tr>
                    <th style="padding: 10px; text-align: left; border-bottom: 2px solid #333;">Name</th>
                    <th style="padding: 10px; text-align: left; border-bottom: 2px solid #333;">Email</th>
                    <th style="padding: 10px; text-align: left; border-bottom: 2px solid #333;">Phone</th>
                    <th style="padding: 10px; text-align: left; border-bottom: 2px solid #333;">Plan</th>
                    <th style="padding: 10px; text-align: left; border-bottom: 2px solid #333;">Actions</th>
                </tr>
            </thead>
            <tbody>
                ${members.map((member, index) => `
                    <tr>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${member.name}</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${member.email}</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${member.phone}</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">${member.plan}</td>
                        <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                            <button onclick="deleteMember(${index})" style="background-color: #ff6b6b; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer;">Delete</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
    `;
}

// Function to add a new member
document.getElementById('memberForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('memberName').value;
    const email = document.getElementById('memberEmail').value;
    const phone = document.getElementById('memberPhone').value;
    const plan = document.getElementById('memberPlan').value;

    const newMember = {
        name,
        email,
        phone,
        plan
    };

    members.push(newMember);
    localStorage.setItem('members', JSON.stringify(members));
    
    displayMembers();
    this.reset();
    
    alert('Member added successfully!');
});

// Function to delete a member
function deleteMember(index) {
    if (confirm('Are you sure you want to delete this member?')) {
        members.splice(index, 1);
        localStorage.setItem('members', JSON.stringify(members));
        displayMembers();
    }
}

// Function to show membership form
function showMembershipForm() {
    document.getElementById('memberForm').scrollIntoView({ behavior: 'smooth' });
}

// Display members when the page loads
document.addEventListener('DOMContentLoaded', displayMembers); 