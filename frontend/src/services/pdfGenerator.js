import { jsPDF } from 'jspdf';

  export function generatePDF(results) {
    const doc = new jsPDF();
    let currentPage = 1;
    const maxY = 280;
    const lineHeight = 10;
    let yPos = 30; // Increased initial position to add more space after header
  
    const addHeader = () => {
      // Professional gray header instead of blue
      doc.setFillColor(248, 249, 250);
      doc.rect(0, 0, 210, 20, 'F');
      doc.setTextColor(33, 37, 41);
      doc.setFontSize(14);
      doc.text('Resume Analysis Report', 20, 14);
      doc.setFontSize(10);
      doc.text(`Page ${currentPage}`, 180, 14);
      doc.setTextColor(0, 0, 0);
      return 30; // Return starting Y position after header with more spacing
    };
  
    const checkPageBreak = () => {
      if (yPos > maxY) {
        doc.addPage();
        currentPage++;
        yPos = addHeader();
      }
    };
  
    // Add initial header
    yPos = addHeader();
  
    // Match Rate with visual indicator
    if (results.summary?.matchRate !== undefined) {
      doc.setFontSize(14);
      doc.text('Match Rate:', 20, yPos);
      yPos += lineHeight;
      doc.setFontSize(12);
      const matchRate = results.summary.matchRate.toFixed(1);
      doc.text(`${matchRate}%`, 30, yPos);
      
      // Add visual progress bar
      const barWidth = 100;
      const barHeight = 5;
      doc.setDrawColor(220, 220, 220);
      doc.setFillColor(220, 220, 220);
      doc.rect(30, yPos + 2, barWidth, barHeight, 'F');
      doc.setFillColor(70, 130, 180); // Steel blue for professional look
      doc.rect(30, yPos + 2, barWidth * (matchRate / 100), barHeight, 'F');
      yPos += lineHeight * 2;
    }
  
    // Experience
    if (results.summary?.totalExperience !== undefined) {
      checkPageBreak();
      doc.setFontSize(14);
      doc.text('Experience:', 20, yPos);
      yPos += lineHeight;
      doc.setFontSize(12);
      doc.text(`Total Years: ${results.summary.totalExperience}`, 30, yPos);
      
      if (results.summary.experienceDetails?.length > 0) {
        results.summary.experienceDetails.forEach(detail => {
          yPos += lineHeight;
          checkPageBreak();
          doc.text(`• ${detail.context}`, 30, yPos);
        });
      }
      yPos += lineHeight * 2;
    }
  
    // Skills Overview
    checkPageBreak();
    doc.setFontSize(14);
    doc.text('Skills Overview:', 20, yPos);
    yPos += lineHeight;
    doc.setFontSize(12);
    doc.text(`Skills Found: ${results.summary?.skillsFound || 0}`, 30, yPos);
    yPos += lineHeight;
    doc.text(`Skills Required: ${results.summary?.skillsRequired || 0}`, 30, yPos);
    yPos += lineHeight * 2;
  
    // Matching Skills
    if (results.matchingSkills?.length > 0) {
      checkPageBreak();
      doc.setFontSize(14);
      doc.text('Matching Skills:', 20, yPos);
      yPos += lineHeight;
      doc.setFontSize(12);
      results.matchingSkills.forEach(skill => {
        checkPageBreak();
        doc.text(`• ${skill}`, 30, yPos);
        yPos += lineHeight;
      });
      yPos += lineHeight;
    }
  
    // Missing Skills
    if (results.missingSkills?.length > 0) {
      checkPageBreak();
      doc.setFontSize(14);
      doc.text('Missing Skills:', 20, yPos);
      yPos += lineHeight;
      doc.setFontSize(12);
      results.missingSkills.forEach(skill => {
        checkPageBreak();
        doc.text(`• ${skill}`, 30, yPos);
        yPos += lineHeight;
      });
      yPos += lineHeight;
    }
  
    // Suggestions
    if (results.suggestions?.length > 0) {
      checkPageBreak();
      doc.setFontSize(14);
      doc.text('Suggestions:', 20, yPos);
      yPos += lineHeight;
      doc.setFontSize(12);
      results.suggestions.forEach(suggestion => {
        const lines = doc.splitTextToSize(suggestion, 170);
        lines.forEach(line => {
          checkPageBreak();
          doc.text(`• ${line}`, 30, yPos);
          yPos += lineHeight;
        });
      });
    }
  
    return doc;
  }