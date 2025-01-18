

export async function analyzeResume(file, jobDescription) {
  try {
    const formData = new FormData();
    formData.append('resume', file);
    formData.append('jobDescription', jobDescription);

    const response = await fetch(`https://resume-analyzer-backend-seven.vercel.app/analyze`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Analysis failed');
    }

    const data = await response.json();
    if (!data || !data.analysis) {
      throw new Error('Invalid response format');
    }

    return data.analysis;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
}