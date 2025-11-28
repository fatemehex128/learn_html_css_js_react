import ollama from 'ollama'
import {useState} from "react";


export default function AiSum() {
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)
    const [question, setQuestion] = useState("when i was 10 year old i work hardly instead study and my dad punished me")
    const [aiMode, setAiMode] = useState("gemma3:4b")

    async function callAi() {
        setLoading(true)
        setResult(null)
        try {
            let obj = {
                model: aiMode, messages: [{
                    role: 'system', content: `
                                You analyze the emotional mood of the user's message and explain it.
                                
                                Follow these rules exactly:
                                
                                1. Reply ONLY with a single JSON object. Do NOT add any other text before or after it.
                                2. The JSON must have EXACTLY these keys:
                                   - "question"
                                   - "answer"
                                   - "mood"
                                   _"type_of_personality_disorder"
                                3.the Key type_of_personality_disorder has these values, that you should analyze the massage and say the type of personality disorder :
                                    * Paranoid Personality Disorder
                                    * Schizoid Personality Disorder
                                    * Schizotypal Personality Disorder
                                    * Antisocial Personality Disorder
                                    * Borderline Personality Disorder
                                    * Histrionic Personality Disorder
                                    * Narcissistic Personality Disorder
                                    * Avoidant Personality Disorder
                                    * Dependent Personality Disorder
                                    * Obsessive–Compulsive Personality Disorder
                                 each disorder has its own core belief:
                                    *Paranoid Personality Disorder** — Core belief: *“Others cannot be trusted and intend to harm or deceive me.”*
                                    * **Schizoid Personality Disorder** — Core belief: *“Relationships are not rewarding; I am better off alone.”*
                                    * **Schizotypal Personality Disorder** — Core belief: *“The world is strange and dangerous; my unusual perceptions and ideas are meaningful.”*
                                    * **Antisocial Personality Disorder** — Core belief: *“People are tools; rules do not apply to me.”*
                                    * **Borderline Personality Disorder** — Core belief: *“I am vulnerable to abandonment; I cannot cope alone.”*
                                    * **Histrionic Personality Disorder** — Core belief: *“I must be the center of attention to be valued.”*
                                    * **Narcissistic Personality Disorder** — Core belief: *“I am superior; my needs take priority.”*
                                    * **Avoidant Personality Disorder** — Core belief: *“I am inadequate and will be rejected if exposed.”*
                                    * **Dependent Personality Disorder** — Core belief: *“I cannot function without others; I need someone to take care of me.”*
                                    * **Obsessive–Compulsive Personality Disorder** — Core belief: *“Mistakes are unacceptable; control and perfection are necessary.”*


                                    
                                7. Use valid JSON syntax:
                                   - Use double quotes for all keys and string values.
                                   - Do not add trailing commas.
                                8. Do NOT output anything except the JSON object.
                                
                                Example format (this is just an example, do NOT reuse this text):
                                
                                {"type_of_personality_disorder":"Paranoid Personality Disorder","question":"I miss you so much","answer":"The message shows longing and affection, so the mood is love.","mood":"love"}
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
        <select value={aiMode} onChange={(e)=>setAiMode(e.target.value)}>
            <option value="qwen3:8b">qwen3:8b</option>
            <option value="qwen3:14b">qwen3:14b</option>
            <option value="phi4-mini">phi4-mini</option>
            <option value="gemma3:4b">gemma3:4b</option>
        </select>
        <textarea cols={100} rows={10} value={question} onChange={(e) => setQuestion(e.target.value)}/>
        {result && (<div>
            {result.error ? (<div>Error: {result.error}</div>) : (<div>
                <div><strong>Question:</strong> {result.question}</div>
                <div><strong>Answer:</strong> {result.answer}</div>
                <div><strong>Mood:</strong> {result.mood}</div>
                <div><strong> Type of personality disorder:</strong> {result.type_of_personality_disorder}</div>
            </div>)}
        </div>)}
        <button onClick={callAi} disabled={loading}>
            {loading ? 'Loading...' : 'send'}
        </button>
    </div>
}