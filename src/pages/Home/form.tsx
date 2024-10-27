import { zodResolver } from '@hookform/resolvers/zod';
import I18n from 'i18nline';
import { h } from 'preact';
import { SubmitHandler, useForm, Controller } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useI18nContext } from '@/context/i18nContext';
import { ethereumFormSchema } from '@/lib/zodSchema';
import { FormChildProps } from '@/types/interface';

type ethereumForm = z.infer<typeof ethereumFormSchema>;

export function EthereumForm({ onSendData, isFetching }: FormChildProps): h.JSX.Element {
  // i18n context
  const i18n = useI18nContext();
  // initiating the form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ethereumForm>({
    defaultValues: {
      ethereumAddress: '',
    },
    resolver: zodResolver(ethereumFormSchema),
  });
  // submitting the form, and sending data to parent
  const submitForm: SubmitHandler<ethereumForm> = (data): void => {
    onSendData(data);
  };

  return (
    <div class="bg-white shadow-lg rounded-lg p-6">
      <h2 class="text-2xl font-bold text-center mb-2 text-primary">
        {I18n.translations[i18n.locale]['formLabel']}
      </h2>
      <form onSubmit={handleSubmit(submitForm)}>
        <div class="mb-4">
          <Label htmlFor="ethereumAddress" className="text-right text-primary">
            {I18n.translations[i18n.locale]['ethereumAddress']}
          </Label>
          <Controller
            name="ethereumAddress"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                id="ethereumAddress"
                className="col-span-3 text-primary mt-2 mb-2"
                type="text"
                placeholder="0X1234..."
              />
            )}
          />
          {errors.ethereumAddress && (
            <span class="col-span-4 text-red-600 text-center">
              {errors.ethereumAddress.message}
            </span>
          )}
        </div>
        <Button
          disabled={isFetching}
          className="bg-primary2 text-white p-2 rounded w-full cursor-pointer"
          type="submit"
        >
          {isFetching
            ? `${I18n.translations[i18n.locale]['pleaseWait']}`
            : `${I18n.translations[i18n.locale]['getBalance']}`}
        </Button>
      </form>
    </div>
  );
}
