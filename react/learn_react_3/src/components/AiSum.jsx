import ollama from 'ollama'
import {useState} from "react";


export default function AiSum() {
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const [question, setQuestion] = useState("when i was 10 year old i work hardly instead study and my dad punished me")

    async function callAi() {
        setLoading(true)
        setResult(null)
        try {
            let obj = {
                model: 'phi4-mini', messages: [{
                    role: 'system', content: `
                                You analyze the emotional mood of the user's message and explain it.
                                
                                Follow these rules exactly:
                                
                                1. Reply ONLY with a single JSON object. Do NOT add any other text before or after it.
                                2. The JSON must have EXACTLY these keys:
                                   - "question"
                                   - "answer"
                                   - "translate"
                                   - "mood"
                                3. Set "question" to the original user message.
                                4. Set "mood" to EXACTLY ONE of these values:
                                   - "love"
                                   - "angry"
                                   - "sad"
                                   - "happy"
                                5. Set "answer" to a short explanation in English that describes the emotional mood of the user's message and why you chose it.
                                6. Set "translate" to a natural Persian (Farsi) translation of the "answer".
                                7. Use valid JSON syntax:
                                   - Use double quotes for all keys and string values.
                                   - Do not add trailing commas.
                                8. Do NOT output anything except the JSON object.
                                
                                Example format (this is just an example, do NOT reuse this text):
                                
                                {"question":"I miss you so much","answer":"The message shows longing and affection, so the mood is love.","translate":"این پیام دلتنگی و محبت را نشان می‌دهد، بنابراین حال و هوا عشق است.","mood":"love"}
                                      `.trim()
                }, {
                    role: 'user', content: question
                }]
            }

            const response = await ollama.chat(obj)

            console.log(response)
            // Remove markdown code block formatting (```json and ```)
            let content = response.message.content
            content = content.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/i, '').trim()
            // Parse JSON string to object
            const parsedResult = JSON.parse(content)
            setResult(parsedResult)
        } catch (error) {
            console.error('Error calling Ollama:', error)
            setResult({error: error.message || 'Failed to connect to Ollama. Make sure Ollama is running on http://127.0.0.1:11434'})
        } finally {
            setLoading(false)
        }
    }

    return <div>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)}/>
        {result && (<div>
            {result.error ? (<div>Error: {result.error}</div>) : (<div>
                <div><strong>Question:</strong> {result.question}</div>
                <div><strong>Answer:</strong> {result.answer}</div>
                <div><strong>Mood:</strong> {result.mood}</div>
                <div><strong>Translate:</strong> {result.translate}</div>
            </div>)}
        </div>)}
        <button onClick={callAi} disabled={loading}>
            {loading ? 'Loading...' : 'send'}
        </button>
    </div>
}