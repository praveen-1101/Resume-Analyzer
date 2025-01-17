import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileCheck } from 'lucide-react';
import { cn } from '../lib/utils';

export function FileUpload({ onFileSelect, reset, selectedFile }) {
  const [currentFile, setCurrentFile] = useState(null);

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles[0]) {
        setCurrentFile(acceptedFiles[0]);
        onFileSelect(acceptedFiles[0]);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
    },
    maxFiles: 1,
  });

  // Reset the file state when `reset` changes
  useEffect(() => {
    if (reset) {
      setCurrentFile(null);
    }
  }, [reset]);

  useEffect(() => {
    if (selectedFile) {
      setCurrentFile(selectedFile);
    } else {
      setCurrentFile(null);
    }
  }, [selectedFile]);

  return (
    <div
      {...getRootProps()}
      className={cn(
        'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
        isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400',
        currentFile ? 'bg-green-50 border-green-500' : ''
      )}
    >
      <input {...getInputProps()} />
      {currentFile ? (
        <div className="flex flex-col items-center">
          <FileCheck className="h-12 w-12 text-green-500" />
          <p className="mt-2 text-sm text-green-600">
            File selected: {currentFile.name}
          </p>
          {!currentFile.lastModified && (
          <p className="mt-2 text-sm text-red-600">
            This file is no longer available. Please re-upload.
          </p>
        )}
          <p className="text-xs text-green-500 mt-1">
            Click or drag to replace
          </p>
        </div>
      ) : isDragActive ? (
        <div className="flex flex-col items-center">
          <Upload className="h-12 w-12 text-blue-500" />
          <p className="mt-2 text-sm text-blue-600">
            Drop your resume here...
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Upload className="h-12 w-12 text-gray-400" />
          <p className="mt-2 text-sm text-gray-600">
            Drag and drop your resume here, or click to select
          </p>
          <p className="text-xs text-gray-500 mt-1">Only PDF files are accepted</p>
        </div>
      )}
    </div>
  );
}
