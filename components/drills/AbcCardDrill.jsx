'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { AlertCircle, CheckCircle2, ArrowLeft, Lightbulb } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useLanguage } from '../../contexts/LanguageContext';

export default function AbcCardDrill({ drill, onComplete, onCancel }) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    activatingEvent: '',
    beliefs: '',
    consequences: '',
    dispute: ''
  });
  const [step, setStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleComplete();
    }
  };

  const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleComplete = () => {
    setIsComplete(true);
    setTimeout(() => {
      onComplete(drill.id, {
        type: 'abc-analysis',
        data: formData,
        completionTime: new Date().toISOString(),
        stepsCompleted: 4
      });
    }, 2000);
  };

  const getCurrentField = () => {
    switch (step) {
      case 1: return 'activatingEvent';
      case 2: return 'beliefs';
      case 3: return 'consequences';
      case 4: return 'dispute';
      default: return 'activatingEvent';
    }
  };

  const getCurrentValue = () => {
    return formData[getCurrentField()];
  };

  const isCurrentStepComplete = () => {
    return getCurrentValue().trim().length > 0;
  };

  const stepContent = {
    1: {
      title: t('activatingEvent'),
      description: t('activatingEventDesc'),
      placeholder: t('activatingEventPlaceholder'),
      icon: '🎯',
      tip: t('activatingEventTip')
    },
    2: {
      title: t('beliefs'),
      description: t('beliefsDesc'),
      placeholder: t('beliefsPlaceholder'),
      icon: '🧠',
      tip: t('beliefsTip')
    },
    3: {
      title: t('consequences'),
      description: t('consequencesDesc'),
      placeholder: t('consequencesPlaceholder'),
      icon: '💭',
      tip: t('consequencesTip')
    },
    4: {
      title: t('dispute'),
      description: t('disputeDesc'),
      placeholder: t('disputePlaceholder'),
      icon: '⚖️',
      tip: t('disputeTip')
    }
  };

  if (isComplete) {
    return (
      <Card className="max-w-2xl mx-auto border-0 shadow-xl">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('greatWork')}</h2>
          <p className="text-gray-600 mb-4">
            {t('abcCompleteMessage')}
          </p>
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>{t('tips')}:</strong> {t('abcProTip')}
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentStep = stepContent[step];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Header */}
      <Card className="mb-6 border-0 shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Button variant="outline" onClick={onCancel} size="sm">
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <div>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-2xl">{currentStep.icon}</span>
                  <span>{t('abcCardTitle')}</span>
                </CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  {t('stepOf', { current: step, total: 4 })} - Cognitive Behavioral Therapy Exercise
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-500 mb-1">{Math.round((step / 4) * 100)}% {t('completed')}</div>
              <div className="w-24 h-2 bg-gray-200 rounded-full">
                <div 
                  className="h-2 bg-gradient-to-r from-[#6495ED] to-blue-600 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Main Content */}
      <Card className="border-0 shadow-xl">
        <CardHeader className="bg-gradient-to-r from-[#6495ED]/5 to-blue-100/50">
          <CardTitle className="text-xl text-gray-900">
            {currentStep.title}
          </CardTitle>
          <p className="text-gray-600">{currentStep.description}</p>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Input Area */}
            <div className="space-y-2">
              <Label htmlFor={getCurrentField()} className="text-base font-medium">
                {t('yourResponse')}
              </Label>
              <Textarea
                id={getCurrentField()}
                placeholder={currentStep.placeholder}
                value={getCurrentValue()}
                onChange={(e) => handleInputChange(getCurrentField(), e.target.value)}
                className="min-h-[120px] text-base"
                autoFocus
              />
            </div>

            {/* Tip */}
            <Alert className="border-blue-200 bg-blue-50">
              <Lightbulb className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800">
                {currentStep.tip}
              </AlertDescription>
            </Alert>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-4">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={step === 1}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>{t('previous')}</span>
              </Button>

              <div className="flex space-x-2">
                {[1, 2, 3, 4].map((num) => (
                  <div
                    key={num}
                    className={`w-3 h-3 rounded-full ${
                      num === step
                        ? 'bg-[#6495ED]'
                        : num < step
                        ? 'bg-green-500'
                        : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>

              <Button
                onClick={handleNext}
                disabled={!isCurrentStepComplete()}
                className="flex items-center space-x-2 bg-gradient-to-r from-[#6495ED] to-blue-600 hover:from-blue-600 hover:to-[#6495ED] text-white px-6"
              >
                <span>{step === 4 ? t('completeAnalysis') : t('nextStep')}</span>
                {step < 4 && <ArrowLeft className="h-4 w-4 rotate-180" />}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}