import React, { useState, useContext } from "react"
import { Text, TextInput, View, StyleSheet, Pressable } from "react-native"
import { AppContext } from "../../scripts/AppContext"
import { router } from "expo-router"

const AdBio = () => {
    const { user, setUser } = useContext(AppContext)
    const [bio, setBio] = useState(user.bio || "")

    const handleSaveBio = () => {
        setUser({ ...user, bio: bio })
        router.replace("/telaPerfil")
    }

    return (
        <View style={styles.container}>
            <Pressable onPress={() => router.replace("/telaPerfil")} style={styles.backButton}>
                <Text style={styles.backText}>voltar</Text>
            </Pressable>

            <View style={styles.bioContainer}>
                <TextInput
                    style={styles.bioInput}
                    placeholder="Escreva sua biografia"
                    value={bio}
                    onChangeText={setBio}
                    multiline
                />
                <Pressable style={styles.saveButton} onPress={handleSaveBio}>
                    <Text style={styles.saveText}>Confirmar</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default AdBio
