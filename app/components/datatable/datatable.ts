const API_URL = "http://localhost:8080/users";

export const getUser = async () => {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("getUser - API response:", data);
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export const fetchUserById = async (id: number) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("fetchUserById - API response:", data);
        
        // Đảm bảo trả về dữ liệu đúng format
        if (data && typeof data === 'object') {
            return data;
        } else {
            throw new Error("Dữ liệu trả về không hợp lệ");
        }
    } catch (error) {
        console.error("Error fetching user by id:", error);
        throw error;
    }
};

export const addUser = async (userData: any) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include',
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error("Error adding user:", error);
        throw error;
    }
};

export const updateUser = async (id: number, userData: any) => {
    if (!id || !userData) {
        throw new Error("ID and user data are required.");
    }
    try {
        // Đảm bảo userData có id để backend có thể xử lý
        const dataToSend = { ...userData, id: id };
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include',
            body: JSON.stringify(dataToSend)
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};

export const deleteUser = async (id: number) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            credentials: 'include'
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return true;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
};